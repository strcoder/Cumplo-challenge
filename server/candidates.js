const _ = require("lodash");
const faker = require('faker');
const __Candidates = {};

module.exports = {
  getMostVoted: removeSensitiveAttributes(getMostVoted),
  all: removeSensitiveAttributes(getAll),
  create: removeSensitiveAttributes(create),
  vote: removeSensitiveAttributes(vote),
  bootstrap: bootstrap,
  exists: exists,
};

function exists(id) {
  return Boolean(__Candidates[id]);
}

function genId() {
  return (+new Date() + ~~(Math.random() * 999999)).toString(36);
}

function removeAttribute(key) {
  return function (o) {
    return {...o, [key]: undefined};
  }
}

function removeSensitiveAttributes(func) {
  return function(...args) {
    const candidates = func(...args);
    // Is a collection
    if (Array.isArray(candidates)) {
      return _.map(candidates, removeAttribute("lastVoteOn"));
    }
    // Is a single element
    return removeAttribute("lastVoteOn")(candidates)
  }
}

function getMostVoted() {
  const candidates = _.map(__Candidates, _.identity);
  const mostVotes = _.maxBy(candidates, function(candidate) { return candidate.votes; }).votes;
  if (mostVotes) {
    const mostVotedCandidates = _.filter(candidates, function(candidate) { return candidate.votes === mostVotes });
    return _.maxBy(mostVotedCandidates, function(candidate) { return candidate.lastVoteOn; });
  }
  return [];
}

function getAll(order = "desc") {
  const candidates = _.map(__Candidates, _.identity);
  return _.sortBy(candidates, [function(candidate) { return candidate.votes * (order === "desc" ? -1 : 1); }]);
}

function create(name, store) {
  const id = genId();
  __Candidates[id] = {id: id, name: name, store: store, votes: 0, lastVoteOn: null};
  return __Candidates[id];
}

function vote(id) {
  __Candidates[id].votes = __Candidates[id].votes + 1;
  __Candidates[id].lastVoteOn = new Date();
  return __Candidates[id];
} 

function bootstrap(entries) {
  for(let i = 0; i < entries; i++) {
    create(faker.name.findName(), faker.company.companyName());
  }
}

