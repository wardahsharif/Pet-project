function community() {
        let animal = prompt("Are you a cat lover?");
        animal = animal.trim();
        if (animal === "yes") {
          alert("welcome to the community đ!");
        } else {
          alert("Too bad âšī¸!");
        }
      }

      let communityButton = document.querySelector("button");
      communityButton.addEventListener("click", community);