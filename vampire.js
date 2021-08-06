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
<<<<<<< HEAD
    let currentVampire = this;
    let numberFromOriginal = 0;
    while(currentVampire.creator) {
=======
    let numberFromOriginal = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
>>>>>>> traversal
      currentVampire = currentVampire.creator;
      numberFromOriginal++;
    }
    return numberFromOriginal;
  }

  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
<<<<<<< HEAD
=======
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
>>>>>>> traversal
  }

  closestCommonAncestor(vampire) {
<<<<<<< HEAD
    
=======
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
>>>>>>> traversal
  }
}
module.exports = Vampire;

