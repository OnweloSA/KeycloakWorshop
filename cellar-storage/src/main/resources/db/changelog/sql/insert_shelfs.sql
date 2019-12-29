insert into shelfs (name, description, rack_id) values ('Wines', 'Shelf for wines', (select id from racks where name = 'Tinctures'));
insert into shelfs (name, description, rack_id) values ('Tinctures 1', 'Last year tinctures', (select id from racks where name = 'Tinctures'));
insert into shelfs (name, description, rack_id) values ('Tinctures 2', 'This year tinctures', (select id from racks where name = 'Tinctures'));
insert into shelfs (name, description, rack_id) values ('Jams 1', 'Strawberry jams', (select id from racks where name = 'Jams'));
insert into shelfs (name, description, rack_id) values ('Jams 2', 'Apple jams', (select id from racks where name = 'Jams'));
insert into shelfs (name, description, rack_id) values ('Salads', 'Salads', (select id from racks where name = 'Salads'));