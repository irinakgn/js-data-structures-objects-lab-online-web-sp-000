// Write your solution in this file!

const driver = {
  key:'drivers'
};
function updateDriverWithKeyAndValue(driver,key,value){
  // const newDriver = { ...driver};
  // newDriver[key] = value;
  // return newDriver;

  return {...driver, ...{key:value}}
}
function destructivelyUpdateDriverWithKeyAndValue(){

}

function deleteFromDriverByKey(){

}

function destructivelyDeleteFromDriverByKey(){

}
