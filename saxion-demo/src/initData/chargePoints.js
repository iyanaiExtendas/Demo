export default [
    {
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
        capabilities: [
            {id: 'CHARGING_PROFILE_CAPABLE', name: 'Charging profile capable'},
            {id: 'CREDIT_CARD_PAYABLE', name: 'Credit card payable'},
            {id: 'REMOTE_START_STOP_CAPABLE', name: 'Remote start stop'},
        ]
    },
    {
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
            {id: 'RESERVABLE', name: 'Reservable'},
            {id: 'RFID_READER', name: 'RFID reader'},
            {id: 'UNLOCK_CAPABLE', name: 'Unlock capable'},
        ]
    },
    {
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
            {id: 'RESERVABLE', name: 'Reservable'},
            {id: 'RFID_READER', name: 'RFID reader'},
            {id: 'UNLOCK_CAPABLE', name: 'Unlock capable'},
        ]
    }
]
