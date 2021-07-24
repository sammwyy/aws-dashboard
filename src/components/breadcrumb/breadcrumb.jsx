import styles from "./breadcrumb.module.sass"
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function getPathObjects () {
    const result = [{
        name: "Home",
        url: "/"
    }];

    const paths = window.location.pathname.split("/");
    let urls = [];

    for (let path of paths) {
        if (path !== "") {
            urls.push(path);
            result.push({
                name: path,
                url: urls.join("/")
            });
        }
    }

    return result;
}

function getPathComponents () {
    const paths = getPathObjects();
    const last = paths.pop();

    const components = [];
    for (let path of paths) {
        components.push(
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={path.url}>{path.name}</BreadcrumbLink>
            </BreadcrumbItem>
        )
    }

    components.push(
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to={last.url} color="orange">{last.name}</BreadcrumbLink>
        </BreadcrumbItem>
    );

    return components;
}

export default function PageBreadcrumb () {
    const items = getPathComponents();

    return (
        <div className={styles["breadcrumb"]}>
            <Breadcrumb className={styles["container"]} spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
                { items }
            </Breadcrumb>
        </div>
    )
}