function community() {
        let animal = prompt("Are you a cat lover?");
        animal = animal.trim();
        if (animal === "yes") {
          alert("welcome to the community 😀!");
        } else {
          alert("Too bad ☹️!");
        }
      }

      let communityButton = document.querySelector("button");
      communityButton.addEventListener("click", community);