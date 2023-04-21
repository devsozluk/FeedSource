import ReactDOM from "react-dom/client";
import App from "@/components/index.tsx";
import "uno.css";
import SiteProvider from "./context/example";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<SiteProvider>
		<App />
	</SiteProvider>
);
