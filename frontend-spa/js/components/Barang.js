const Barang = {
    template: `
    <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <div class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-2xl font-bold">
            Data Barang
        </h1>
    </div>

    <!-- Content -->
    <div class="p-6">

        <!-- Judul dan Tombol Tambah -->
        <div class="flex justify-between items-center mb-5">

            <h2 class="text-2xl font-bold">
                Daftar Barang
            </h2>

            <button
                @click="showModal=true"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Tambah Barang
            </button>

        </div>

        <!-- Tabel -->
<div class="bg-white shadow-lg rounded-lg p-4">

    <table class="w-full">

        <thead class="bg-gray-200">
            <tr>
                <th class="p-3">ID</th>
                <th class="p-3">Nama Barang</th>
                <th class="p-3">Stok</th>
                <th class="p-3">Harga</th>
                <th class="p-3">Kategori</th>
                <th class="p-3">Supplier</th>
                <th class="p-3">Aksi</th>
            </tr>
        </thead>

        <tbody>

            <tr
                v-for="item in barangs"
                :key="item.id"
                class="border-b hover:bg-gray-100"
            >

                <td class="p-3">{{ item.id }}</td>
                <td class="p-3">{{ item.nama_barang }}</td>
                <td class="p-3">{{ item.stok }}</td>
                <td class="p-3">{{ item.harga }}</td>
                <td class="p-3">{{ item.nama_kategori }}</td>
                <td class="p-3">{{ item.nama_supplier }}</td>

                <td class="p-3">

                    <button
                        @click="editBarang(item)"
                        class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                        Edit
                    </button>

                    <button
                        @click="hapusBarang(item.id)"
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
            {{ editId ? 'Edit Barang' : 'Tambah Barang' }}
        </h2>

        <input
            v-model="form.nama_barang"
            placeholder="Nama Barang"
            class="border rounded w-full p-3 mb-3"
        >

        <input
            v-model="form.stok"
            type="number"
            placeholder="Stok"
            class="border rounded w-full p-3 mb-3"
        >

        <input
            v-model="form.harga"
            type="number"
            placeholder="Harga"
            class="border rounded w-full p-3 mb-3"
        >

        <select
            v-model="form.kategori_id"
            class="border rounded w-full p-3 mb-3"
        >
            <option value="">Pilih Kategori</option>

            <option
                v-for="k in kategoris"
                :key="k.id"
                :value="k.id"
            >
                {{ k.nama_kategori }}
            </option>

        </select>

        <select
            v-model="form.supplier_id"
            class="border rounded w-full p-3 mb-4"
        >
            <option value="">Pilih Supplier</option>

            <option
                v-for="s in suppliers"
                :key="s.id"
                :value="s.id"
            >
                {{ s.nama_supplier }}
            </option>

        </select>

        <button
            @click="simpanBarang"
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
data(){
    return{
        barangs:[],
        kategoris:[],
        suppliers:[],
        
        showModal:false,
        editId:null,

        form:{
            nama_barang:'',
            stok:'',
            harga:'',
            kategori_id:'',
            supplier_id:''
        }
    }
},
mounted(){
    this.getBarang();
    this.getKategori();
    this.getSupplier();

},

methods:{
    async getBarang(){
        const response = await axios.get(
            "http://localhost:8080/api/barang"
        );
        this.barangs=response.data;
    },
    
    async getKategori(){
        const response=await axios.get(
            "http://localhost:8080/api/kategori"
        );
        this.kategoris=response.data;
    },
    
    async getSupplier(){
        const response=await axios.get(
            "http://localhost:8080/api/supplier"
        );
        this.suppliers=response.data;
    },
    
    async simpanBarang(){
        if(this.editId==null){
            await axios.post(
                "http://localhost:8080/api/barang",
                this.form
            );
        }else{
            await axios.put(
                "http://localhost:8080/api/barang/"+this.editId,
                this.form
            );
            this.editId=null;
        }
        this.showModal=false;
        this.getBarang();
    },
    editBarang(item){
        this.editId=item.id;
        
        this.form.nama_barang=item.nama_barang;
        this.form.stok=item.stok;
        this.form.harga=item.harga;
        this.form.kategori_id=item.kategori_id;
        this.form.supplier_id=item.supplier_id;

        this.showModal=true;
    },
    async hapusBarang(id){
        if(confirm("Yakin hapus data?")){
        
            await axios.delete(
                "http://localhost:8080/api/barang/"+id
            );
            
            this.getBarang();
        }
    }
}
}
console.log('Barang component loaded!');