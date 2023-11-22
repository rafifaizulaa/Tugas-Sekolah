const router = require('express').Router();
const { kelas } = require('../controllers');

// GET localhost:8080/kelas=> Ambil data semua kelas
router.get('/', kelas.getDatakelas);

// // POST localhost:8080/kelas/add => Tambah data kelaske database
router.post('/add', kelas.addDatakelas);

// // POST localhost:8080/kelas/2 => Edit data kelas
router.put('/edit/:id', kelas.editDatakelas);

// // POST localhost:8080/kelas/delete => Delete data kelas
router.delete('/delete/:id', kelas.deleteDatakelas);

module.exports = router;