// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   address: "Hà Nội",
//   company: "Unicode Academy",
//   "shipping-address": "Nam Từ Liêm - Hà Nội",
//   job: "Dev",
//   phone: "0123456789",
// };

// console.log(user);

//Destructuring Object
// const { name: username, address, "shipping-address": shippingAddress } = user;
// console.log(username, address, shippingAddress);

// const { job = "Teacher", phone = "0123456789" } = user;

// console.log(job, phone);

// const { name: username, email, ...rest } = user;
// console.log(username, email);
// console.log(rest);

// username = "Hoàng An Unicode";

//Destructuring Array
// const users = ["Hoàng An", { email: "hoangan.web@gmail.com", age: 31 }];
// console.log(users);
// const [username, , age] = users;
// console.log(username, age);

// const [username, email = "example@gmail.com", age, address = "Hà Nội"] = users;

// console.log(username, email, age, address);

// const [username, ...[email, age]] = users;
// console.log(username);
// console.log(email, age);

// const [username, ...[{ email, age }]] = users;
// console.log(username, email, age);

// const render = ({ name: username, email }) => {
//   console.log(username, email);
// };

// render({ name: "Hoàng An", email: "hoangan.web@gmail.com" });

const users = [
  {
    id: 1,
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  },
  {
    id: 2,
    name: "Hoàng An 2",
    email: "hoangan2.web@gmail.com",
  },
  {
    id: 3,
    name: "Hoàng An 3",
    email: "hoangan3.web@gmail.com",
  },
];

const html = users
  .map(
    ({ name, email }) => `<div>
<h3>${name}</h3>
<h3>${email}</h3>
</div>`,
  )
  .join("");

document.body.innerHTML = html;
