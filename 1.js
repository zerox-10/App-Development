// Initial Data - acts like our database
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// CREATE
function createUser(name) {
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name
    };
    users.push(newUser);
    console.log('User Created:', newUser);
}

// READ
function readUsers() {
    console.log('All Users:', users);
}

// UPDATE
function updateUser(id, newName) {
    const user = users.find(u => u.id === id);
    if (user) {
        user.name = newName;
        console.log(`User ${id} Updated to:`, user);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}

// DELETE
function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        console.log(`User ${id} Deleted:`, deletedUser[0]);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}

// Example usage:
createUser('Charlie');
readUsers();
updateUser(2, 'Robert');
deleteUser(1);
readUsers();
