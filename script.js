

var body=document.createElement("body")

var div1=document.createElement("div")

div1.setAttribute("id","hello")

    setTimeout(function() {
        document.getElementById("hello").innerText="10"
        setTimeout(() => {
            document.getElementById("hello").innerText="9"
            setTimeout(() => {
                document.getElementById("hello").innerText="8"
                setTimeout(() => {
                    document.getElementById("hello").innerText="7"
                    setTimeout(function() {
                        document.getElementById("hello").innerText="6"
                        setTimeout(function() {
                            document.getElementById("hello").innerText="5"
                            setTimeout(()=>{
                                document.getElementById("hello").innerText="4"
                                setTimeout(()=>{
                                    document.getElementById("hello").innerText="3"
                                    setTimeout(()=>{
                                        document.getElementById("hello").innerText="2"
                                        setTimeout(()=>{
                                            document.getElementById("hello").innerText="1"
                                            setTimeout(()=>{
                                                document.getElementById("hello").innerText="Happy Independence Day"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000);
                    },1000); 
                }, 1000);
            }, 1000);
        },1000);
    }, 1000);

document.body.appendChild(div1)