const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatasiswa = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM siswa', function(error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            data: data
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal ambil data!',
        });
    }
}

// manambahkan data
const addDatasiswa = async(req, res) => {
    let data = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        id_kelas: req.body.id_kelas
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO siswa SET ?;', [data], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil x data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menambahkan data!',
        });
    }
}

//mengubah data
const editDatasiswa = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        id_kelas: req.body.id_kelas

    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE siswa SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil edit data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal edit data'
        });
    }
}

//menghapus data
const deleteDatasiswa = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM siswa WHERE id = ?;', [id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil hapus data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menghapus data!'
        });
    }
}

module.exports = {
    getDatasiswa,
    addDatasiswa,
    editDatasiswa,
    deleteDatasiswa
}