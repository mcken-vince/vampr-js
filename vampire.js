class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberFromOriginal = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberFromOriginal++;
    }
    return numberFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    if (this.offspring)
      for (const child of this.offspring) {
        const result = child.vampireWithName(name);
        if (result) {
          return result;
        }
      }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let censusCount = 0;

    for (const child of this.offspring) {
      censusCount++;
      censusCount += child.totalDescendents;
    }
    return censusCount;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennialVamps = [];
    if (this.yearConverted > 1980) {
      millennialVamps.push(this);
    }
    for (const child of this.offspring) {
      millennialVamps = millennialVamps.concat(child.allMillennialVampires);
    }
    return millennialVamps;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    const myLineage = [];
    const yourLineage = [];

    let currentV = this;
    // create this's lineage array
    while (currentV) {
      myLineage.push(currentV);
      currentV = currentV.creator;
    }

    currentV = vampire;
    // create vampire's lineage array
    while (currentV) {
      yourLineage.push(currentV);
      currentV = currentV.creator;
    }

    for (const ancestor of myLineage) {
      for (const yourAncestor of yourLineage) {
        if (ancestor.name === yourAncestor.name) {
          return yourAncestor;
        }
      }   
    }
  }
}

module.exports = Vampire;

