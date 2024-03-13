document.addEventListener("DOMContentLoaded", function () {
    const coffeeForm = document.getElementById("coffeeForm");
    const order_id = coffeeForm.getAttribute("order_id")
    coffeeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userName = document.getElementById("userName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const coffeeType = document.getElementById("coffeeType").value;
        const quantity = document.getElementById("quantity").value;

        if (!userName || !phoneNumber || !coffeeType || !quantity) {
            alert("Please fill in all fields.");
            return;
        }

        const phonePattern = /^998[012345789][0-9]{8}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (quantity < 1 || quantity > 20) {
            alert("Quantity must be between 1 and 20.");
            return;
        }

        const order = {
            userName,
            phoneNumber,
            coffeeType,
            quantity,
        };

        fetch(`/api/order-update/${order_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Please reload the page");
                }
                return response.json();
            })
            .then((data) => {
                alert("Order updated successfully!");
                console.log(data);
                location.href = "/all-orders";
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
                alert(
                    "An error occurred while placing the order. Please try again."
                );
            });
    });
});
