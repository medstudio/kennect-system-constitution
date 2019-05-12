## Hierarchy based filters in LBI Dashboards as well as DW Reports

```

filters = {
    "hrcy": {
        "type": "hrcy",
        "modelName": "master_flat_hierarchy",// table which contains hrcy data 
        // table should have 5 columns

        // user userRole display         boss 
        // (id) (role)  (name/HQ/Rere)  (bossid) 
        // 1502  MR      omkar            1101  
        "userKey": "employee_position_id",
        "userRoleKey": "role",
        "displayKey": "employee_position_id",
        "bossKey": "boss_position_id",


        "filterKey": "selected_boss_pos_id", // field by which name we want to add this value of user selected toi the filters
        "filterRoleKey": "boss_role", // under development - not supported

        // UI me kya display karna hai
        "panelDisplayName": "Select Lead",

        // to map the employee using this to the HRCY, we need conversion of EmployerGID to hrcy-accepted-field in this case it is territory/ sometimes its HQ, 
        "selfRoleConfig": {
            "modelName": "master_flat_hierarchy",
            "ecName": "get_terr_by_emp",
            "employerGIDField": "emp",
            /* in DW system, it has 3 modes */
            "type": "by_ec",
            "typeComment": "by_ec/by_emp_code/direct",
            "part1": "direct",
            "value": "Medley",
            "displayValue": "Company",
            "part2": "by_ec",// implies that it should return 4 keys userKey, userRoleKey, bossKey, displayKey
            "ecName": "hrcy_egid_position_mapper",
            "employerGIDField": "Position_No"
        },
        // Role Hierarchy Logic
        "roles": [
            {
                "val": "NVL", // should correspond to Values in Database table
                "level": 10, // relative to this array , should be less for high roles
                "text": "National Value Lead" // should tell what to display
            },
            {
                "val": "RVL",
                "level": 20,
                "text": "Regional Value Lead"
            },
            {
                "val": "VS",
                "level": 30,
                "text": "Value Specialist"
            }
        ]
    }
}
```