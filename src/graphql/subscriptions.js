// this is an auto generated file. This will be overwritten

export const onCreateDeviceErrorHistory = /* GraphQL */ `
    subscription OnCreateDeviceErrorHistory($serial_id: String!) {
        onCreateDeviceErrorHistory(serial_id: $serial_id) {
            id
            serial_id
            dealer_id
            user_id
            ayla_dsn
            name
            lime_scale_error
            m01_water_flow_rate_raw
            m02_outlet_temperature
            m04_combustion_cycles
            m08_inlet_temperature
            error_code
            warning_code
            operation_hours
            active
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceRecirculationHistory = /* GraphQL */ `
    subscription OnCreateDeviceRecirculationHistory($serial_id: String!) {
        onCreateDeviceRecirculationHistory(serial_id: $serial_id) {
            id
            heater_serial_number
            schedule
            schedule_enabled
            priority_status
            recirculation_enabled
            recirculation_duration
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceShadow = /* GraphQL */ `
    subscription OnCreateDeviceShadow($heater_serial_number: String!) {
        onCreateDeviceShadow(heater_serial_number: $heater_serial_number) {
            heater_serial_number
            ayla_dsn
            rinnai_registered
            do_maintenance_retrieval
            model
            dsn
            module_log_level
            set_priority_status
            set_priority
            set_recirculation_enable
            set_recirculation_enabled
            set_domestic_temperature
            set_operation_enabled
            schedule
            schedule_holiday
            schedule_enabled
            do_zigbee
            timezone
            timezone_encoded
            priority_status
            recirculation_enabled
            recirculation_duration
            lock_enabled
            operation_enabled
            module_firmware_version
            recirculation_not_configured
            maximum_domestic_temperature
            minimum_domestic_temperature
            baton_shadow
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceShadowHistory = /* GraphQL */ `
    subscription OnCreateDeviceShadowHistory($heater_serial_number: String!) {
        onCreateDeviceShadowHistory(heater_serial_number: $heater_serial_number) {
            id
            heater_serial_number
            set_priority_status
            set_recirculation_enable
            set_recirculation_enabled
            set_domestic_temperature
            set_operation_enabled
            schedule
            schedule_holiday
            schedule_enabled
            do_zigbee
            priority_status
            recirculation_enabled
            recirculation_duration
            lock_enabled
            operation_enabled
            module_firmware_version
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateDeviceShadow = /* GraphQL */ `
    subscription OnUpdateDeviceShadow($heater_serial_number: String!) {
        onUpdateDeviceShadow(heater_serial_number: $heater_serial_number) {
            heater_serial_number
            ayla_dsn
            rinnai_registered
            do_maintenance_retrieval
            model
            dsn
            module_log_level
            set_priority_status
            set_priority
            set_recirculation_enable
            set_recirculation_enabled
            set_domestic_temperature
            set_operation_enabled
            schedule
            schedule_holiday
            schedule_enabled
            do_zigbee
            timezone
            timezone_encoded
            priority_status
            recirculation_enabled
            recirculation_duration
            lock_enabled
            operation_enabled
            module_firmware_version
            recirculation_not_configured
            maximum_domestic_temperature
            minimum_domestic_temperature
            baton_shadow
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceInfo = /* GraphQL */ `
    subscription OnCreateDeviceInfo($serial_id: String!) {
        onCreateDeviceInfo(serial_id: $serial_id) {
            serial_id
            ayla_dsn
            name
            baton_info
            exception
            domestic_combustion
            domestic_temperature
            wifi_ssid
            wifi_signal_strength
            wifi_channel_frequency
            local_ip
            public_ip
            ap_mac_addr
            recirculation_temperature
            recirculation_duration
            zigbee_inventory
            zigbee_status
            lime_scale_error
            mc__total_calories
            type
            unix_time
            m01_water_flow_rate_raw
            do_maintenance_retrieval
            aft_tml
            tot_cli
            unt_mmp
            aft_tmh
            bod_tmp
            m09_fan_current
            m02_outlet_temperature
            firmware_version
            bur_thm
            tot_clm
            exh_tmp
            m05_fan_frequency
            m10_total_bath_fill_volume
            m06_other_system_controllers
            thermal_fuse_temperature
            m04_combustion_cycles
            hardware_version
            m11_heat_exchanger_outlet_temperature
            bur_tmp
            tot_wrl
            m12_bypass_servo_position
            m08_inlet_temperature
            m20_pump_cycles
            module_firmware_version
            error_code
            warning_code
            internal_temperature
            tot_wrm
            unknown_b
            rem_idn
            m07_water_flow_control_position
            m03_combustion_hours_raw
            m15_indoor_antifreeze_temperature
            operation_hours
            device_boot
            thermocouple
            tot_wrh
            recirculation_capable
            maintenance_list
            tot_clh
            temperature_table
            m19_pump_hours
            oem_host_version
            schedule_a_name
            zigbee_pairing_count
            schedule_c_name
            schedule_b_name
            model
            schedule_d_name
            total_bath_fill_volume
            dt
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceInfoHistory = /* GraphQL */ `
    subscription OnCreateDeviceInfoHistory($serial_id: String!) {
        onCreateDeviceInfoHistory(serial_id: $serial_id) {
            id
            serial_id
            name
            domestic_combustion
            domestic_temperature
            recirculation_temperature
            recirculation_duration
            zigbee_inventory
            zigbee_status
            lime_scale_error
            mc__total_calories
            m01_water_flow_rate_raw
            aft_tml
            tot_cli
            unt_mmp
            aft_tmh
            bod_tmp
            m09_fan_current
            m02_outlet_temperature
            bur_thm
            tot_clm
            exh_tmp
            m05_fan_frequency
            m10_total_bath_fill_volume
            m06_other_system_controllers
            thermal_fuse_temperature
            m04_combustion_cycles
            hardware_version
            m11_heat_exchanger_outlet_temperature
            bur_tmp
            tot_wrl
            m12_bypass_servo_position
            m08_inlet_temperature
            m20_pump_cycles
            module_firmware_version
            internal_temperature
            tot_wrm
            rem_idn
            m07_water_flow_control_position
            m03_combustion_hours_raw
            m15_indoor_antifreeze_temperature
            operation_hours
            device_boot
            thermocouple
            tot_wrh
            recirculation_capable
            maintenance_list
            tot_clh
            temperature_table
            m19_pump_hours
            total_bath_fill_volume
            dt
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateDeviceInfo = /* GraphQL */ `
    subscription OnUpdateDeviceInfo($serial_id: String!) {
        onUpdateDeviceInfo(serial_id: $serial_id) {
            serial_id
            ayla_dsn
            name
            baton_info
            exception
            domestic_combustion
            domestic_temperature
            wifi_ssid
            wifi_signal_strength
            wifi_channel_frequency
            local_ip
            public_ip
            ap_mac_addr
            recirculation_temperature
            recirculation_duration
            zigbee_inventory
            zigbee_status
            lime_scale_error
            mc__total_calories
            type
            unix_time
            m01_water_flow_rate_raw
            do_maintenance_retrieval
            aft_tml
            tot_cli
            unt_mmp
            aft_tmh
            bod_tmp
            m09_fan_current
            m02_outlet_temperature
            firmware_version
            bur_thm
            tot_clm
            exh_tmp
            m05_fan_frequency
            m10_total_bath_fill_volume
            m06_other_system_controllers
            thermal_fuse_temperature
            m04_combustion_cycles
            hardware_version
            m11_heat_exchanger_outlet_temperature
            bur_tmp
            tot_wrl
            m12_bypass_servo_position
            m08_inlet_temperature
            m20_pump_cycles
            module_firmware_version
            error_code
            warning_code
            internal_temperature
            tot_wrm
            unknown_b
            rem_idn
            m07_water_flow_control_position
            m03_combustion_hours_raw
            m15_indoor_antifreeze_temperature
            operation_hours
            device_boot
            thermocouple
            tot_wrh
            recirculation_capable
            maintenance_list
            tot_clh
            temperature_table
            m19_pump_hours
            oem_host_version
            schedule_a_name
            zigbee_pairing_count
            schedule_c_name
            schedule_b_name
            model
            schedule_d_name
            total_bath_fill_volume
            dt
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceActivity = /* GraphQL */ `
    subscription OnCreateDeviceActivity($clientId: String!) {
        onCreateDeviceActivity(clientId: $clientId) {
            clientId
            serial_id
            timestamp
            eventType
            clientInitiatedDisconnect
            sessionIdentifier
            principalIdentifier
            disconnectReason
            ipAddress
            versionNumber
            topics
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateDeviceActivity = /* GraphQL */ `
    subscription OnUpdateDeviceActivity($clientId: String!) {
        onUpdateDeviceActivity(clientId: $clientId) {
            clientId
            serial_id
            timestamp
            eventType
            clientInitiatedDisconnect
            sessionIdentifier
            principalIdentifier
            disconnectReason
            ipAddress
            versionNumber
            topics
            createdAt
            updatedAt
        }
    }
`;
export const onCreateRinnaiDealer = /* GraphQL */ `
    subscription OnCreateRinnaiDealer {
        onCreateRinnaiDealer {
            id
            name
            email
            approved
            confirmed
            aws_confirm
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateRinnaiDealer = /* GraphQL */ `
    subscription OnUpdateRinnaiDealer {
        onUpdateRinnaiDealer {
            id
            name
            email
            approved
            confirmed
            aws_confirm
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
        }
    }
`;
export const onDeleteRinnaiDealer = /* GraphQL */ `
    subscription OnDeleteRinnaiDealer {
        onDeleteRinnaiDealer {
            id
            name
            email
            approved
            confirmed
            aws_confirm
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
        }
    }
`;
export const onCreateRinnaiUser = /* GraphQL */ `
    subscription OnCreateRinnaiUser {
        onCreateRinnaiUser {
            id
            name
            email
            admin
            approved
            confirmed
            aws_confirm
            imported
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            st_accesstoken
            st_refreshtoken
            callbackurl_oauthtoken
            callbackurl_statecallback
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
            devices {
                nextToken
            }
        }
    }
`;
export const onUpdateRinnaiUser = /* GraphQL */ `
    subscription OnUpdateRinnaiUser {
        onUpdateRinnaiUser {
            id
            name
            email
            admin
            approved
            confirmed
            aws_confirm
            imported
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            st_accesstoken
            st_refreshtoken
            callbackurl_oauthtoken
            callbackurl_statecallback
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
            devices {
                nextToken
            }
        }
    }
`;
export const onDeleteRinnaiUser = /* GraphQL */ `
    subscription OnDeleteRinnaiUser {
        onDeleteRinnaiUser {
            id
            name
            email
            admin
            approved
            confirmed
            aws_confirm
            imported
            country
            city
            state
            street
            zip
            company
            username
            firstname
            lastname
            st_accesstoken
            st_refreshtoken
            callbackurl_oauthtoken
            callbackurl_statecallback
            phone_country_code
            phone
            primary_contact
            terms_accepted
            terms_accepted_at
            terms_email_sent_at
            terms_token
            roles
            createdAt
            updatedAt
            devices {
                nextToken
            }
        }
    }
`;
export const onCreateDevice = /* GraphQL */ `
    subscription OnCreateDevice {
        onCreateDevice {
            id
            thing_name
            device_name
            dealer_uuid
            city
            state
            street
            zip
            country
            firmware
            model
            dsn
            user_uuid
            connected_at
            key
            lat
            lng
            address
            vacation
            createdAt
            updatedAt
            user {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
            monitoring {
                serial_id
                dealer_uuid
                user_uuid
                request_state
                createdAt
                updatedAt
            }
            activity {
                clientId
                serial_id
                timestamp
                eventType
                clientInitiatedDisconnect
                sessionIdentifier
                principalIdentifier
                disconnectReason
                ipAddress
                versionNumber
                topics
                createdAt
                updatedAt
            }
            schedule {
                nextToken
            }
            info {
                serial_id
                ayla_dsn
                name
                baton_info
                exception
                domestic_combustion
                domestic_temperature
                wifi_ssid
                wifi_signal_strength
                wifi_channel_frequency
                local_ip
                public_ip
                ap_mac_addr
                recirculation_temperature
                recirculation_duration
                zigbee_inventory
                zigbee_status
                lime_scale_error
                mc__total_calories
                type
                unix_time
                m01_water_flow_rate_raw
                do_maintenance_retrieval
                aft_tml
                tot_cli
                unt_mmp
                aft_tmh
                bod_tmp
                m09_fan_current
                m02_outlet_temperature
                firmware_version
                bur_thm
                tot_clm
                exh_tmp
                m05_fan_frequency
                m10_total_bath_fill_volume
                m06_other_system_controllers
                thermal_fuse_temperature
                m04_combustion_cycles
                hardware_version
                m11_heat_exchanger_outlet_temperature
                bur_tmp
                tot_wrl
                m12_bypass_servo_position
                m08_inlet_temperature
                m20_pump_cycles
                module_firmware_version
                error_code
                warning_code
                internal_temperature
                tot_wrm
                unknown_b
                rem_idn
                m07_water_flow_control_position
                m03_combustion_hours_raw
                m15_indoor_antifreeze_temperature
                operation_hours
                device_boot
                thermocouple
                tot_wrh
                recirculation_capable
                maintenance_list
                tot_clh
                temperature_table
                m19_pump_hours
                oem_host_version
                schedule_a_name
                zigbee_pairing_count
                schedule_c_name
                schedule_b_name
                model
                schedule_d_name
                total_bath_fill_volume
                dt
                createdAt
                updatedAt
            }
            errorLogs {
                nextToken
            }
            shadow {
                heater_serial_number
                ayla_dsn
                rinnai_registered
                do_maintenance_retrieval
                model
                dsn
                module_log_level
                set_priority_status
                set_priority
                set_recirculation_enable
                set_recirculation_enabled
                set_domestic_temperature
                set_operation_enabled
                schedule
                schedule_holiday
                schedule_enabled
                do_zigbee
                timezone
                timezone_encoded
                priority_status
                recirculation_enabled
                recirculation_duration
                lock_enabled
                operation_enabled
                module_firmware_version
                recirculation_not_configured
                maximum_domestic_temperature
                minimum_domestic_temperature
                baton_shadow
                createdAt
                updatedAt
            }
            registration {
                nextToken
            }
        }
    }
`;
export const onUpdateDevice = /* GraphQL */ `
    subscription OnUpdateDevice {
        onUpdateDevice {
            id
            thing_name
            device_name
            dealer_uuid
            city
            state
            street
            zip
            country
            firmware
            model
            dsn
            user_uuid
            connected_at
            key
            lat
            lng
            address
            vacation
            createdAt
            updatedAt
            user {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
            monitoring {
                serial_id
                dealer_uuid
                user_uuid
                request_state
                createdAt
                updatedAt
            }
            activity {
                clientId
                serial_id
                timestamp
                eventType
                clientInitiatedDisconnect
                sessionIdentifier
                principalIdentifier
                disconnectReason
                ipAddress
                versionNumber
                topics
                createdAt
                updatedAt
            }
            schedule {
                nextToken
            }
            info {
                serial_id
                ayla_dsn
                name
                baton_info
                exception
                domestic_combustion
                domestic_temperature
                wifi_ssid
                wifi_signal_strength
                wifi_channel_frequency
                local_ip
                public_ip
                ap_mac_addr
                recirculation_temperature
                recirculation_duration
                zigbee_inventory
                zigbee_status
                lime_scale_error
                mc__total_calories
                type
                unix_time
                m01_water_flow_rate_raw
                do_maintenance_retrieval
                aft_tml
                tot_cli
                unt_mmp
                aft_tmh
                bod_tmp
                m09_fan_current
                m02_outlet_temperature
                firmware_version
                bur_thm
                tot_clm
                exh_tmp
                m05_fan_frequency
                m10_total_bath_fill_volume
                m06_other_system_controllers
                thermal_fuse_temperature
                m04_combustion_cycles
                hardware_version
                m11_heat_exchanger_outlet_temperature
                bur_tmp
                tot_wrl
                m12_bypass_servo_position
                m08_inlet_temperature
                m20_pump_cycles
                module_firmware_version
                error_code
                warning_code
                internal_temperature
                tot_wrm
                unknown_b
                rem_idn
                m07_water_flow_control_position
                m03_combustion_hours_raw
                m15_indoor_antifreeze_temperature
                operation_hours
                device_boot
                thermocouple
                tot_wrh
                recirculation_capable
                maintenance_list
                tot_clh
                temperature_table
                m19_pump_hours
                oem_host_version
                schedule_a_name
                zigbee_pairing_count
                schedule_c_name
                schedule_b_name
                model
                schedule_d_name
                total_bath_fill_volume
                dt
                createdAt
                updatedAt
            }
            errorLogs {
                nextToken
            }
            shadow {
                heater_serial_number
                ayla_dsn
                rinnai_registered
                do_maintenance_retrieval
                model
                dsn
                module_log_level
                set_priority_status
                set_priority
                set_recirculation_enable
                set_recirculation_enabled
                set_domestic_temperature
                set_operation_enabled
                schedule
                schedule_holiday
                schedule_enabled
                do_zigbee
                timezone
                timezone_encoded
                priority_status
                recirculation_enabled
                recirculation_duration
                lock_enabled
                operation_enabled
                module_firmware_version
                recirculation_not_configured
                maximum_domestic_temperature
                minimum_domestic_temperature
                baton_shadow
                createdAt
                updatedAt
            }
            registration {
                nextToken
            }
        }
    }
`;
export const onDeleteDevice = /* GraphQL */ `
    subscription OnDeleteDevice {
        onDeleteDevice {
            id
            thing_name
            device_name
            dealer_uuid
            city
            state
            street
            zip
            country
            firmware
            model
            dsn
            user_uuid
            connected_at
            key
            lat
            lng
            address
            vacation
            createdAt
            updatedAt
            user {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
            monitoring {
                serial_id
                dealer_uuid
                user_uuid
                request_state
                createdAt
                updatedAt
            }
            activity {
                clientId
                serial_id
                timestamp
                eventType
                clientInitiatedDisconnect
                sessionIdentifier
                principalIdentifier
                disconnectReason
                ipAddress
                versionNumber
                topics
                createdAt
                updatedAt
            }
            schedule {
                nextToken
            }
            info {
                serial_id
                ayla_dsn
                name
                baton_info
                exception
                domestic_combustion
                domestic_temperature
                wifi_ssid
                wifi_signal_strength
                wifi_channel_frequency
                local_ip
                public_ip
                ap_mac_addr
                recirculation_temperature
                recirculation_duration
                zigbee_inventory
                zigbee_status
                lime_scale_error
                mc__total_calories
                type
                unix_time
                m01_water_flow_rate_raw
                do_maintenance_retrieval
                aft_tml
                tot_cli
                unt_mmp
                aft_tmh
                bod_tmp
                m09_fan_current
                m02_outlet_temperature
                firmware_version
                bur_thm
                tot_clm
                exh_tmp
                m05_fan_frequency
                m10_total_bath_fill_volume
                m06_other_system_controllers
                thermal_fuse_temperature
                m04_combustion_cycles
                hardware_version
                m11_heat_exchanger_outlet_temperature
                bur_tmp
                tot_wrl
                m12_bypass_servo_position
                m08_inlet_temperature
                m20_pump_cycles
                module_firmware_version
                error_code
                warning_code
                internal_temperature
                tot_wrm
                unknown_b
                rem_idn
                m07_water_flow_control_position
                m03_combustion_hours_raw
                m15_indoor_antifreeze_temperature
                operation_hours
                device_boot
                thermocouple
                tot_wrh
                recirculation_capable
                maintenance_list
                tot_clh
                temperature_table
                m19_pump_hours
                oem_host_version
                schedule_a_name
                zigbee_pairing_count
                schedule_c_name
                schedule_b_name
                model
                schedule_d_name
                total_bath_fill_volume
                dt
                createdAt
                updatedAt
            }
            errorLogs {
                nextToken
            }
            shadow {
                heater_serial_number
                ayla_dsn
                rinnai_registered
                do_maintenance_retrieval
                model
                dsn
                module_log_level
                set_priority_status
                set_priority
                set_recirculation_enable
                set_recirculation_enabled
                set_domestic_temperature
                set_operation_enabled
                schedule
                schedule_holiday
                schedule_enabled
                do_zigbee
                timezone
                timezone_encoded
                priority_status
                recirculation_enabled
                recirculation_duration
                lock_enabled
                operation_enabled
                module_firmware_version
                recirculation_not_configured
                maximum_domestic_temperature
                minimum_domestic_temperature
                baton_shadow
                createdAt
                updatedAt
            }
            registration {
                nextToken
            }
        }
    }
`;
export const onCreateDeviceMonitor = /* GraphQL */ `
    subscription OnCreateDeviceMonitor {
        onCreateDeviceMonitor {
            id
            ayla_dsn
            serial_number
            user
            firmware
            recirculation
            schedule
            connected
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateDeviceMonitor = /* GraphQL */ `
    subscription OnUpdateDeviceMonitor {
        onUpdateDeviceMonitor {
            id
            ayla_dsn
            serial_number
            user
            firmware
            recirculation
            schedule
            connected
            createdAt
            updatedAt
        }
    }
`;
export const onDeleteDeviceMonitor = /* GraphQL */ `
    subscription OnDeleteDeviceMonitor {
        onDeleteDeviceMonitor {
            id
            ayla_dsn
            serial_number
            user
            firmware
            recirculation
            schedule
            connected
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceSchedule = /* GraphQL */ `
    subscription OnCreateDeviceSchedule {
        onCreateDeviceSchedule {
            id
            serial_id
            name
            schedule
            days
            times
            schedule_date
            active
            createdAt
            updatedAt
        }
    }
`;
export const onUpdateDeviceSchedule = /* GraphQL */ `
    subscription OnUpdateDeviceSchedule {
        onUpdateDeviceSchedule {
            id
            serial_id
            name
            schedule
            days
            times
            schedule_date
            active
            createdAt
            updatedAt
        }
    }
`;
export const onDeleteDeviceSchedule = /* GraphQL */ `
    subscription OnDeleteDeviceSchedule {
        onDeleteDeviceSchedule {
            id
            serial_id
            name
            schedule
            days
            times
            schedule_date
            active
            createdAt
            updatedAt
        }
    }
`;
export const onCreateDeviceRegistration = /* GraphQL */ `
    subscription OnCreateDeviceRegistration {
        onCreateDeviceRegistration {
            serial
            dealer_id
            device_id
            user_uuid
            model
            gateway_dsn
            application_type
            recirculation_type
            install_datetime
            registration_type
            dealer_user_email
            active
            createdAt
            updatedAt
            customer {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
        }
    }
`;
export const onUpdateDeviceRegistration = /* GraphQL */ `
    subscription OnUpdateDeviceRegistration {
        onUpdateDeviceRegistration {
            serial
            dealer_id
            device_id
            user_uuid
            model
            gateway_dsn
            application_type
            recirculation_type
            install_datetime
            registration_type
            dealer_user_email
            active
            createdAt
            updatedAt
            customer {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
        }
    }
`;
export const onDeleteDeviceRegistration = /* GraphQL */ `
    subscription OnDeleteDeviceRegistration {
        onDeleteDeviceRegistration {
            serial
            dealer_id
            device_id
            user_uuid
            model
            gateway_dsn
            application_type
            recirculation_type
            install_datetime
            registration_type
            dealer_user_email
            active
            createdAt
            updatedAt
            customer {
                id
                name
                email
                admin
                approved
                confirmed
                aws_confirm
                imported
                country
                city
                state
                street
                zip
                company
                username
                firstname
                lastname
                st_accesstoken
                st_refreshtoken
                callbackurl_oauthtoken
                callbackurl_statecallback
                phone_country_code
                phone
                primary_contact
                terms_accepted
                terms_accepted_at
                terms_email_sent_at
                terms_token
                roles
                createdAt
                updatedAt
            }
        }
    }
`;
