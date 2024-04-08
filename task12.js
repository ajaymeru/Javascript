const users = [
    { id: 1, name: "A", age: 25 },
    { id: 2, name: "B", age: 30 },
    { id: 3, name: "C", age: 22 }
  ];
  
  const userIdToUpdate = 3; 
  const newAge = 35; 
  
  let userUpdated = false;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userIdToUpdate) {
      users[i].age = newAge;
      userUpdated = true;
      break;
    }
  }
  
  if (userUpdated) {
    console.log("User age updated successfully.");
    console.log(users);
  } else {
    console.log("User with specified ID does not exist.");
  }
  
