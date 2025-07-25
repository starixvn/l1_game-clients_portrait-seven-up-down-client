const win = window as any;
export const languages = {
    "Common": {},
    "7Up7Down": {}
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh_cn = languages;