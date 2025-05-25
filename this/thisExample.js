let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// একই ফাংশন দুইটি অবজেক্টে ব্যবহার করা হচ্ছে
user.f = sayHi;
admin.f = sayHi;

// এই কলগুলোতে "this" ভিন্ন ভিন্ন হবে
user.f();      // আউটপুট: John   (this == user)
admin.f();     // আউটপুট: Admin  (this == admin)

admin['f']();  // আউটপুট: Admin  (this == admin)
