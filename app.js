// // popover
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function twoSum(nums, target) {
    let anwarray =[];
 for(let i=0;i<nums.length;i++){
     for(var j=i+1;j<nums.length;j++){
      console.log(i,j)
