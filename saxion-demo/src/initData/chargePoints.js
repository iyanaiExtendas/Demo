export default [
    {
        id: 1,
        name: "Point 1",
        status: "Unavailable",
        auth_name: "author",
        auth_password: "password",
        availability: 'public',
        tariff_group_id: 1,
        configuration_group_id: 1,
        free_of_charge_token_contract_id: 1,
        connectors: [
            {
                number: 1,
                status: "OPERATIVE",
                standard: "CHADEMO",
                format: "SOCKET",
                power_type: "AC_1_PHASE",
                voltage: 10,
                amperage: 20
            },
            {
                number: 2,
                status: "OPERATIVE",
                standard: "DOMESTIC_A",
                format: "CABLE",
                power_type: "AC_1_PHASE",
                voltage: 23,
                amperage: 44
            }
        ],
        capabilities: ['Charging profile capable', 'Credit card payable', 'Remote start stop']
    },
    {
        id: 2,
        name: "Point 2",
        status: "Unavailable",
        auth_name: "author",
        auth_password: "password",
        availability: 'private',
        tariff_group_id: 2,
        configuration_group_id: 2,
        free_of_charge_token_contract_id: 2,
        connectors: [
            {
                number: 1,
                status: "INOPERATIVE",
                standard: "CHADEMO",
                format: "SOCKET",
                power_type: "AC_3_PHASE",
                voltage: 2,
                amperage: 9
            },
            {
                number: 2,
                status: "OPERATIVE",
                standard: "DOMESTIC_A",
                format: "CABLE",
                power_type: "DC",
                voltage: 235,
                amperage: 454
            }
        ],
        capabilities: [
            'Reservable',
            'RFID reader',
            'Unlock capable',
        ]
    },
    {
        id: 3,
        name: "Point 3",
        status: "Available",
        auth_name: "author",
        auth_password: "password",
        availability: 'public',
        tariff_group_id: 3,
        configuration_group_id: 3,
        free_of_charge_token_contract_id: 3,
        connectors: [
            {
                number: 1,
                status: "INOPERATIVE",
                standard: "CHADEMO",
                format: "SOCKET",
                power_type: "AC_3_PHASE",
                voltage: 2,
                amperage: 9
            },
            {
                number: 2,
                status: "OPERATIVE",
                standard: "DOMESTIC_A",
                format: "CABLE",
                power_type: "DC",
                voltage: 235,
                amperage: 454
            }
        ],
        capabilities: [
            'Reservable',
            'RFID reader',
            'Unlock capable',
        ]
    },
]
