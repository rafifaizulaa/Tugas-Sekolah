const router = require('express').Router();
const routeKelas = require('./kelas');
const routesSiswa = require('./siswa');

// GET localhost:8080/kelas => Ambil data semua kelas
router.use('/kelas', routeKelas);
router.use('/siswa', routesSiswa);

module.exports = router;