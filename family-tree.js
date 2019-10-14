class FamilyTree {
  constructor (value) {
    if(!value)throw 'Must have parent value!';
    if(typeof value!== 'string')throw 'Value must be string!'

    this.value=value;
    this.children=[];
  }
  insert(child){
    this.children.push(new FamilyTree(child));
  }
  familySize(){
    return this.children.length+1;
  }
  findMember(familyMember){

    return this.children.find(person=>{

      return person.value===familyMember;

    })

  }

  log(){
    let log=[];

    if(this.children.length===0){
      log.push(`-- ${this.value}`)
    }else{
      
      let family = this.children.map(child=>{
        return `--${child.log()}`
      })

      family.unshift(`-- ${this.value}`);
      
      log.push(family.join(''))

    }
    return log
  }

}

module.exports = FamilyTree;