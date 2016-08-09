var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,
    host: '',
    user: '',
    password: '',
    database: '',
    debug: false
});


module.exports.load_appts = function(req, res) {

    pool.getConnection(function(err, connection) {

        if (err) {
            console.log('Err while getting connection');
        }

        console.log('connected as id' + connection.threadId);

        connection.query('select concat(patients.firstname," ",patients.lastname) as ptname, DATE_FORMAT(appointments.apptdate,"%b %d %Y %h:%i %p") as apptdate, concat(doctors.firstname," ",doctors.lastname) as docname from patients,appointments,doctors where patients.patientid=appointments.patientid and appointments.assigneddocid=doctors.docid', function(err, rows, fields) {
            if (!err) {
                connection.release();
                res.json(rows);
            } else {
                console.log(err);
                console.log('Error while running query');
            }

            connection.on('error', function(err) {
                console.log('Error after getting connection');
            });

        });

    })

    //pool.end();

}

module.exports.lookUpPt = function(req, res) {

    pool.getConnection(function(err, connection) {

            if (err) {
                console.log('Err while getting connection');
            }

            var lookUpParam = req.params.lookUpParam;

            //Looking up the patients

            var query = "select concat(firstname,' ',lastname) as ptname, phone, email from patients where phone='" + lookUpParam + "' or email='"+ lookUpParam + "'";
            connection.query(query,function(err,rows,fields){   

                if (!err) {
                    connection.release();
                    res.json(rows);
                } else {
                    console.log(err);
                    console.log('Error while running query');
                }

                connection.on('error', function(err) {
                    console.log('Error after getting connection');
                });

            });


    })

}


module.exports.loadDocList = function(req, res) {

    pool.getConnection(function(err, connection) {

            if (err) {
                console.log('Err while getting connection');
            }

            var lookUpParam = req.params.lookUpParam;

            //Looking up the patients

            connection.query('select concat(firstname," ",lastname) as docname, docid from doctors',function(err,rows,fields){   

                if (!err) {
                    connection.release();
                    res.json(rows);
                } else {
                    console.log(err);
                    console.log('Error while running query');
                }

                connection.on('error', function(err) {
                    console.log('Error after getting connection');
                });

            });


    })

}


module.exports.bookAppt = function(req, res) {

    pool.getConnection(function(err, connection) {

            if (err) {
                console.log('Err while getting connection');
            }

            
            //Looking up the patients
            //console.log(req);
            console.log(req.body);
            console.log(req.body.fName);

            var insertQuery = "insert into patients(firstname,lastname) values('"+req.body.fName+"','"+req.body.lName+"')";

            connection.query(insertQuery,function(err,result){   

                if (!err) {
                    connection.release();
                    res.json(result);
                } else {
                    console.log(err);
                    console.log('Error while running query');
                }

                connection.on('error', function(err) {
                    console.log('Error after getting connection');
                });

            });


    })

}