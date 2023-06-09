drop table if exists user_product;
drop table if exists review;
drop table if exists product;
drop table if exists user_account;

CREATE TABLE product
(
    id          serial  not null primary key,
    name        text    not null,
    description text    not null,
    category    text    not null,
    link        text    not null,
    price       integer not null
);

CREATE TABLE user_account
(
    id        serial not null primary key,
    name      text   not null,
    last_name text   not null,
    email     text   not null,
    password  text   not null,
    admin     boolean
);

CREATE TABLE review
(
    id          serial  not null primary key,
    title       text    not null,
    description text    not null,
    user_id     integer not null references user_account (id) ON DELETE CASCADE,
    product_id  integer not null references product (id) ON DELETE CASCADE,
    rate        integer not null
);

CREATE TABLE user_product
(
    id         serial not null primary key,
    user_id    int references user_account (id) ON DELETE CASCADE,
    product_id int references product (id) ON DELETE CASCADE
);
insert into product(name, description, category, link, price)
values ('Macbook', 'very good', 'Technique',
        'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456',
        2000);

insert into product(name, description, category, link, price)
values ('Macbook', 'the!', 'Technique',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389',
        2500);



insert into product(name, description, category, link, price)
values ('Batman Protein Shaker', 'the!', 'Gym',
        'https://cdn.shopify.com/s/files/1/1099/1898/products/Batman_Insulated_Stainless_Steel_Protein_Shaker_Bottle_BlenderBottle.png?v=1628611819',
        15);

insert into product(name, description, category, link, price)
values ('Lenovo thinkpad', 'the!', 'Technique',
        'https://laptopmedia.com/wp-content/uploads/2021/06/3-52-e1624453916559.jpg', 3000);


insert into user_account(name, last_name, email, password, admin)
VALUES ('Giorgi', 'Mazm', 'giorgimazm@gmail.com', 'iphone', true);

insert into user_account(name, last_name, email, password, admin)
VALUES ('John', 'Johns', 'johnyBones@gmail.com', 'kickthem', false);



insert into review(title, description, user_id, product_id, rate)
VALUES ('I am speechless', 'This is literally the best thing ever', 1, 3, 4);
