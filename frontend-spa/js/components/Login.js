const Login = {
    template: `
    <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <div class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-2xl font-bold">
            E-Inventory
        </h1>
    </div>

    <!-- Isi Halaman -->
    <div class="p-6">

        <h2 class="text-xl font-bold text-center mb-8">
            Selamat Datang
        </h2>

        <!-- Form Login -->
        <div class="flex justify-center items-center">

            <div class="bg-white p-6 rounded-lg shadow-lg w-80">

                <h2 class="text-2xl font-bold mb-4 text-center">
                    Login
                </h2>

                <input
                    v-model="username"
                    type="text"
                    placeholder="Username"
                    class="border rounded w-full p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="border rounded w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                <button
                    @click="login"
                    class="bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded"
                >
                    Login
                </button>

            </div>

        </div>

    </div>

</div>
`,
data() {
    return {
        username: "",
        password: ""
    }
},
methods: {
async login() {
    this.error = '';
    console.log('Login attempt:', this.username, this.password);
    
        try {
            const res = await axios.post("http://localhost:8080/api/login", {
                username: this.username,
                password: this.password,
        headers: {
            "Content-Type": "application/json"
        }
            });
            
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isLogin", true);
            this.$router.push("/dashboard");
        } catch (err) {
            alert("Login gagal");
        }
    }
}
};