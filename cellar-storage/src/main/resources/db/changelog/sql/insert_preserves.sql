insert into preserves (name, type, description, shelf_id) values ('Fruit wine 1', 'TINCTURE', 'Fruit from berries', (select id from shelfs where name = 'Wines'));
insert into preserves (name, type, description, shelf_id) values ('Fruit wine 2', 'TINCTURE', 'Fruit from plums', (select id from shelfs where name = 'Wines'));
insert into preserves (name, type, description, shelf_id) values ('Grape wine', 'TINCTURE', 'Grape wine', (select id from shelfs where name = 'Wines'));
insert into preserves (name, type, description, shelf_id) values ('Mint tincture', 'TINCTURE', 'Mint tincture', (select id from shelfs where name = 'Tinctures 1'));
insert into preserves (name, type, description, shelf_id) values ('Walnuts tincture', 'TINCTURE', 'Walnuts tincture', (select id from shelfs where name = 'Tinctures 2'));
insert into preserves (name, type, description, shelf_id) values ('Walnuts tincture 2', 'TINCTURE', 'Walnuts tincture', (select id from shelfs where name = 'Tinctures 2'));
insert into preserves (name, type, description, expiration_date, shelf_id) values ('Strawberry Jam 1', 'JAM', 'Strawberry jams', '2019-12-30', (select id from shelfs where name = 'Jams 1'));
insert into preserves (name, type, description, expiration_date, shelf_id) values ('Strawberry Jam 2', 'JAM', 'Strawberry jams', '2020-12-30', (select id from shelfs where name = 'Jams 1'));
insert into preserves (name, type, description, expiration_date, shelf_id) values ('Apple jam 1', 'JAM', 'Apple jams', '2020-12-30', (select id from shelfs where name = 'Jams 2'));
insert into preserves (name, type, description, expiration_date, shelf_id) values ('Potato salad', 'SALAD', 'Potato salad', '2020-02-10', (select id from shelfs where name = 'Salads'));