var no = document.querySelector("#no");
        no.addEventListener("click",change);
        function change()
        {
            var i = Math.floor(Math.random()*400)+1;
            var j = Math.floor(Math.random()*400)+1;
            no.style.left = i+"px";
            no.style.top = j+"px";
        }


        var yes1 = document.getElementById('yes');
        yes1.addEventListener("click", function(){
            document.getElementsByClassName('btn-container')[0].innerHTML = `<h1 class="innerHTML">I knew it ! </h1>`;
        });
