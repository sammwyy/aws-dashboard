import { BellIcon } from '@chakra-ui/icons'
import { Avatar, Button, IconButton, Image, Text } from "@chakra-ui/react";
import styles from "./navbar.module.sass";
import NavLink from "./navlink";

export default function Navbar () {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["container"]}>
                <div className={styles["content"]}>
                    <div className={styles["brand"]}>
                        <Image src="/logo.png" width="64px" alt="AWS Logo" />
                    </div>

                    <div className={styles["navigation"]}>
                        <NavLink url="/billing" title="Billing" />
                        <NavLink url="/services" title="Services" />
                        <NavLink url="/support" title="Support" />
                    </div>

                    <div className={styles["account"]}>
                        <IconButton margin="2" variant="ghost" aria-label="Notifications" icon={<BellIcon />} />

                        <Button variant="ghost" padding="5" margin="2">
                            <Text className={styles["username"]}>Sammwy</Text>
                            <Avatar className={styles["avatar"]} name="Sammwy" size="sm" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}