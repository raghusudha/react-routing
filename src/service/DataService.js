var dataService = {};
var customers=[
    {id:1, name:'Vivek',email:'vivek@gmail.com',phone:'9876543212', address:'India'},
    {id:2, name:'Sharad',email:'sharad@gmail.com',phone:'1234456789', address:'Delhi'},
    
];
dataService.getCustomers = function(){
    return customers;
}
dataService.deleteCustomer = function(id){
   //delete customer
   var list=[];
   for(var i=0;i<customers.length;i++){
    if(id != customers[i].id){
        list.push(customers[i]);
    }
    customers = list;
    }
}
dataService.updateCustomer = function(customer){
    //edit customer
    console.log(JSON.stringify(customer));
    for(var i=0;i<customers.length;i++){
        if(customer.id == customers[i].id){
            customers[i]=customer;
        }
    }
 }
 dataService.getCustomerById = function(id){
    //edit customer
    for(var i=0;i<customers.length;i++){
        if(id == customers[i].id){
            return customers[i];
        }
    }
 }

dataService.addCustomer = function(customer){
    //add customer
    customer.push(customer);
 }
export default dataService;
