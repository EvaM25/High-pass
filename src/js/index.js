      document.addEventListener("DOMContentLoaded", (e) => {
      document.getElementById("open-search-form").addEventListener("click", (e) => {
          document.getElementById("search-form").classList.add("search-form_show"), document.getElementById("open-search-form").classList.add("hide-btn")
      }),
       document.getElementById("search-form-clear").addEventListener("click", (e) => {
          document.getElementById("search-form").classList.remove("search-form_show"), document.getElementById("open-search-form").classList.remove("hide-btn")
      }), document.getElementById("search-form").addEventListener("submit", (e) => {
          e.preventDefault()
      })
  });


      document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open");
        });
    });
