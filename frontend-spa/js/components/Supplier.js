const Supplier = {
    template: `
    <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <div class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-2xl font-bold">
            Data Supplier
        </h1>
    </div>

    <!-- Content -->
    <div class="p-6">

        <!-- Judul dan Tombol Tambah -->
        <div class="flex justify-between items-center mb-5">

            <h2 class="text-2xl font-bold">
                Daftar Supplier
            </h2>

            <button
                @click="showModal=true"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Tambah Supplier
            </button>

        </div>

        <!-- Tabel -->
        <div class="bg-white shadow-lg rounded-lg p-4">

            <table class="w-full">

                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3">ID</th>
                        <th class="p-3">Nama Supplier</th>
                        <th class="p-3">Alamat</th>
                        <th class="p-3">Telepon</th>
                        <th class="p-3">Aksi</th>
                    </tr>
                </thead>

                <tbody>

                    <tr
                        v-for="item in suppliers"
                        :key="item.id"
                        class="border-b hover:bg-gray-100"
                    >

                        <td class="p-3">{{ item.id }}</td>
                        <td class="p-3">{{ item.nama_supplier }}</td>
                        <td class="p-3">{{ item.alamat }}</td>
                        <td class="p-3">{{ item.telepon }}</td>

                        <td class="p-3">

                            <button
                                @click="editSupplier(item)"
                                class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>

                            <button
                                @click="hapusSupplier(item.id)"
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
                {{ editId ? 'Edit Supplier' : 'Tambah Supplier' }}
            </h2>

            <input
                v-model="form.nama_supplier"
                placeholder="Nama Supplier"
                class="border rounded w-full p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <input
                v-model="form.alamat"
                placeholder="Alamat"
                class="border rounded w-full p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <input
                v-model="form.telepon"
                placeholder="Telepon"
                class="border rounded w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <button
                @click="simpanSupplier"
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
            suppliers:[],
            showModal:false,
            editId:null,
            form:{
                nama_supplier:'',
                alamat:'',
                telepon:''
            }
        }
    },
    mounted(){
        this.getSupplier();
    },
    
    methods:{
        async getSupplier(){
            const response = await axios.get(
                "http://localhost:8080/api/supplier"
            );
            this.suppliers = response.data;
        },

        async simpanSupplier(){
            if(this.editId==null){
                await axios.post(
                    "http://localhost:8080/api/supplier",
                    this.form
                );

                }else{
                    await axios.put(
                        "http://localhost:8080/api/supplier/"+this.editId,
                        this.form
                    );
                    this.editId=null;
                }
                this.form.nama_supplier='';
                this.form.alamat='';
                this.form.telepon='';

                this.showModal=false;

                this.getSupplier();
            },

            async hapusSupplier(id){
                if(confirm("Yakin hapus data?")){
                    await axios.delete(
                        "http://localhost:8080/api/supplier/"+id
                    );
                    this.getSupplier();
                }
            },

            editSupplier(item){
                this.editId=item.id;

                this.form.nama_supplier=item.nama_supplier;
                this.form.alamat=item.alamat;
                this.form.telepon=item.telepon;
                
                this.showModal=true;
            },
        }
    }
    console.log('Supplier component loaded!');