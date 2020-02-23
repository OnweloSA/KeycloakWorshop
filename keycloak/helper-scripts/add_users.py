from keycloak import KeycloakAdmin

emails = [
    "bartosz.sadel@onwelo.com",
    "tomasz.ramieczek@onwelo.com",
    "kami.swiader@onwelo.com"
]


class User(object):
    def __init__(self, email):
        self.email = self.username = email.lower()
        alias = self.email.split('@')[0]
        try:
            [name, surname] = alias.split('.')
        except ValueError:
            [name, surname] = [alias[:1], alias[1:]]
        self.name = name.capitalize()
        self.surname = surname.capitalize()
        self.password = name.capitalize() + surname.capitalize() + '1!'

    def __str__(self):
        return f'name: {self.name}, surname: {self.surname}, email: {self.email}'



def main():
    keycloak_admin = KeycloakAdmin(server_url='http://localhost:8080/auth/', username='onwelo',
                                   password='workshop', realm_name='master', verify=True)

    for user in convert_to_users(emails):
        print(user)

        create_user(keycloak_admin, user)

        user_id = keycloak_admin.get_user_id(user.username)
        print("User id: ", user_id)

        reset_password(keycloak_admin, user, user_id)

        assign_roles(keycloak_admin, user_id)


def convert_to_users(emails):
    for email in emails:
        yield User(email)

def reset_password(keycloak_admin, user, user_id):
    keycloak_admin.set_user_password(user_id=user_id, password=user.password, temporary=True)


def assign_roles(keycloak_admin, user_id):
    client_id = keycloak_admin.get_client_id("jpk-dev")
    realm_roles = keycloak_admin.get_client_roles(client_id=client_id)
    role_id = None
    role_name = "ROLE_USER"
    for role in realm_roles:
        print(role)
        if role["name"] == role_name:
            role_id = role["id"]
            break
    print("Role id: ", role_id)
    keycloak_admin.assign_client_role(client_id=client_id, user_id=user_id,
                                      roles={"id": role_id, "name": role_name})


def create_user(keycloak_admin, user):
    keycloak_admin.create_user({
        "email": user.email,
        "username": user.username,
        "firstName": user.name,
        "lastName": user.surname,
        "enabled": True,
        "credentials": [{
            "value": user.password,
            "type": "password",
            "temporary": True
        }]
    })


if __name__ == '__main__':
    main()