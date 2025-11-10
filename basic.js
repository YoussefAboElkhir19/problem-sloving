


// const button = document.getElementById("btn-1");
// button.addEventListener("click", () => {
//     alert("Hello World");
//     button.style.color = "red";
// });

// JQuery 

// $("#btn-1").click(
//     () => {
//         $("#btn-1").css("color", "red");
//         alert("Hello World");
//     }
// )

// $(document).ready(
//     () => {
//         $("#btn-1").click(
//             () => {
//                 $("#title").text("Clicked Me Success");
//             }
//         )

//     }
// )

// $("#input-1").keyup(
//     (e) => {
//         console.log(e.key);
//     }
// )




$("#showName").click(
    function () {
        let name = $("#nameInput").val();
        alert("Hello  " + name);
    }
);
// $("#showBtn").click(function () {
//     let name = $("#nameInput").val();
//     alert("Hello " + name);
// });

// *********************************************************

$("#textToggle").css("color", "blue");
$("#ShowHide").click(
    () => {
        $("#textToggle").toggle();
    }
)
// *********************************************************
// let input = document.getElementById("input")
// input.addEventListener("keydown", (e) => {
//     console.log(`زرار مضغوط:  ${e.key}`);
// });
// As Jquery 
$("#input").keydown((e) => {
    console.log(`زرار مضغوط:  ${e.key}`);

})
// *********************************************************
$("#box").mouseover(
    () => {
        $("#box").css("background-color", "green");
    }
)
// *********************************************************
$("#city").change(
    () => {
        alert("City Change");

    }
)


