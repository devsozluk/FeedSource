import { createContext, useContext, useState } from "react";

type SiteContextType = {
	theme: string;
	setTheme: (theme: string) => void;
	language: string;
	setLanguage: (language: string) => void;
};

const SiteContext = createContext<SiteContextType>({
	theme: "light",
	setTheme: () => {},
	language: "en",
	setLanguage: () => {},
});

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState("en");

	const data: SiteContextType = {
		theme,
		setTheme,
		language,
		setLanguage,
	};

	return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
};

export const useSite = (): SiteContextType => {
	const context = useContext(SiteContext);
	if (context === undefined) {
		throw new Error("useSite must be used within a SiteProvider");
	}
	return context;
};

export default SiteProvider;
