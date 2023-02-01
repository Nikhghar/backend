CREATE DATABASE hostel;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE hostelites(
    h_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    h_name VARCHAR(255) NOT NULL,
    h_email VARCHAR(255) NOT NULL,
    h_password VARCHAR(255) NOT NULL
);

CREATE TABLE student (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    reg_id int NOT NULL,
    fullname VARCHAR(255) NOT NULL, 
    std_address VARCHAR(255) NOT NULL,
    std_email VARCHAR(255) NOT NULL,
    guard_name VARCHAR(255) NOT NULL,
    guard_num VARCHAR(255) NOT NULL
);

--insert fake users

INSERT INTO student (reg_id, fullname, std_address, std_email, guard_name, guard_num) VALUES (211081003, 'asmita raina', 'noida', 'araina_b21@it.vjti.ac.in', 'amy', 9811093582);

INSERT INTO hostelites(h_name,h_email,h_password) VALUES ('Asmita','araina_b21@it.vjti.ac.in','ashsap123');
