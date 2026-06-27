const Kategori = {
    template: `
    <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <div class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-2xl font-bold">
            E-Inventory
        </h1>
    </div>

    <!-- Content -->
    <div class="p-6">

        <!-- Judul dan Tombol Tambah -->
        <div class="flex justify-between items-center mb-5">

            <h1 class="text-2xl font-bold">
                Data Kategori
            </h1>

            <button
                @click="showModal=true"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Tambah Kategori
            </button>

        </div>

        <!-- Tabel -->
        <div class="bg-white shadow rounded p-4">

            <table class="w-full">

                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3">ID</th>
                        <th class="p-3">Nama Kategori</th>
                        <th class="p-3">Aksi</th>
                    </tr>
                </thead>

                <tbody>

                    <tr
                        v-for="item in kategoris"
                        :key="item.id"
                        class="border-b hover:bg-gray-100"
                    >

                        <td class="p-3">
                            {{item.id}}
                        </td>

                        <td class="p-3">
                            {{item.nama_kategori}}
                        </td>

                        <td class="p-3">

                            <button
                                @click="editKategori(item)"
                                class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>

                            <button
                                @click="hapusKategori(item.id)"
                                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2"
                            >
                                Hapus
                            </button>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>

    <!-- Modal -->
    <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >

        <div class="bg-white p-6 rounded-lg shadow-lg w-96">

            <h2 class="text-xl font-bold mb-4">
                {{ editId ? 'Edit Kategori' : 'Tambah Kategori' }}
            </h2>

            <input
                v-model="form.nama_kategori"
                type="text"
                placeholder="Nama kategori"
                class="border rounded w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <button
                @click="simpanKategori"
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
                Simpan
            </button>

            <button
                @click="showModal=false"
                class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ml-2"
            >
                Batal
            </button>

        </div>

    </div>

</div>
`,
data() {
    return{
        kategoris: [],
        showModal:false,
        editId:null,
        form:{
            nama_kategori:''
        }
    }
},
mounted() {
    this.getKategori();
},
methods:{
    async getKategori(){
        const response = await axios.get(
            "http://localhost:8080/api/kategori"
        );

        this.kategoris = response.data;
    },

    async simpanKategori(){
        if(this.editId==null){
            await axios.post(
                "http://localhost:8080/api/kategori",
                this.form
            );
        }else{
            await axios.put(
                "http://localhost:8080/api/kategori/"+this.editId,
                this.form
            );
            this.editId=null;
        }
        this.form.nama_kategori='';
        this.showModal=false;
        this.getKategori();       
    },

    async hapusKategori(id){
        
        if(confirm("Yakin hapus?")){
            
            await axios.delete(
                "http://localhost:8080/api/kategori/"+id
            );
            this.getKategori();
        }
    },
    editKategori(item){
        this.editId=item.id;
        this.form.nama_kategori=item.nama_kategori;
        this.showModal=true;
        }
    }
}
console.log('Kategori component loaded!');