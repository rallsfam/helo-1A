CREATE TABLE users (
    user_id serial primary key,
    username varchar(255),
    email varchar(255),
    password varchar(255),
    picture text
);

CREATE TABLE posts (
    post_id serial primary key,
    user_id int references users(user_id),
    post_url text 
);