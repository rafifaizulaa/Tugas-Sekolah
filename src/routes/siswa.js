const router = require('express').Router();
const { siswa } = require('../controllers');

// GET localhost:8080/siswa=> Ambil data semua siswa
router.get('/', siswa.getDatasiswa);

// // POST localhost:8080/siswa/add => Tambah data siswake database
router.post('/add', siswa.addDatasiswa);

// // POST localhost:8080/siswa/2 => Edit data siswa
router.put('/edit/:id', siswa.editDatasiswa);

// // POST localhost:8080/siswa/delete => Delete data siswa
router.delete('/delete/:id', siswa.deleteDatasiswa);

module.exports = router;