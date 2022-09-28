import { AppShell } from "@mantine/core";
import Headers from "./headers";
import Footers from "./footers";

function Layout({categories, children}) {
    return (  
        <AppShell
            navbar={<Headers categories={categories}/>}
            footer={<Footers/>}
        >
            {children}
        </AppShell>
    );
}

export default Layout;