window.onload = async () => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const accountsList = document.getElementById('accountsList');
    accountsList.innerHTML = users.map(user => `<li>${user.username}</li>`).join('');

    async function findOneListingByName(client, nameOfListing) {
        const result = await client.db("Logins").collection("accountsList").findOne({ user: user1 });

        if (result) {
            console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
            console.log(result);
        } else {
            console.log(`No listings found with the name '${nameOfListing}'`);
        }
    }

    await findOneListingByName(client, "Infinite Views");

};
