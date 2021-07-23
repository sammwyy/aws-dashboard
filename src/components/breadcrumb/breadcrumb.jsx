import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"

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
                <BreadcrumbLink href={path.url}>{path.name}</BreadcrumbLink>
            </BreadcrumbItem>
        )
    }

    components.push(
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={last.url} color="orange">{last.name}</BreadcrumbLink>
        </BreadcrumbItem>
    );

    return components;
}

export default function PageBreadcrumb () {
    const items = getPathComponents();

    return (
        <div>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
                { items }
            </Breadcrumb>
        </div>
    )
}