const Dashboard = {
  template: `
  <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <div class="bg-blue-600 text-white p-4 flex justify-between items-center shadow">

        <h1 class="text-2xl font-bold">
            Dashboard E-Inventory
        </h1>

        <button
            @click="logout"
            class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
            Logout
        </button>

    </div>

    <!-- Content -->
    <div class="p-6">

        <h2 class="text-2xl font-bold mb-6">
            Selamat Datang Administrator
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Kategori -->
            <div class="bg-white shadow-lg rounded-lg p-6">

                <h3 class="text-xl font-bold text-blue-600">
                    Kategori
                </h3>

                <p class="text-gray-500 mt-2">
                    Kelola data kategori barang.
                </p>

                <router-link
                    to="/kategori"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-5 inline-block"
                >
                    Kelola Kategori
                </router-link>

            </div>

            <!-- Supplier -->
            <div class="bg-white shadow-lg rounded-lg p-6">

                <h3 class="text-xl font-bold text-green-600">
                    Supplier
                </h3>

                <p class="text-gray-500 mt-2">
                    Kelola data supplier barang.
                </p>

                <router-link
                    to="/supplier"
                    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-5 inline-block"
                >
                    Kelola Supplier
                </router-link>

            </div>

            <!-- Barang -->
            <div class="bg-white shadow-lg rounded-lg p-6">

                <h3 class="text-xl font-bold text-purple-600">
                    Barang
                </h3>

                <p class="text-gray-500 mt-2">
                    Kelola data inventaris barang.
                </p>

                <router-link
                    to="/barang"
                    class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded mt-5 inline-block"
                >
                    Kelola Barang
                </router-link>

            </div>

        </div>

    </div>

</div>
  `,

  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");

      this.$router.push("/login");
    }
  }
};
console.log('Dashboard component loaded!');