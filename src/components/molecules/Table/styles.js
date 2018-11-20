export const styles = (theme) => ({
    table: {
        maxWidth: '100%',
        maxHeight: '100%',
        height: '100% !important',
        width: '100% !important'
    },
    tableHead: {
        padding: '5px',
        color: theme.table.color,
        fontSize: theme.table.fontSize,
        fontWeight: 800,
        textAlign: 'left',
        borderBottom: theme.table.borderBottom
    },
    tableCell: {
        // borderBottom: 'none',
        padding: '5px',
        color: theme.table.color,
        fontSize: theme.table.fontSize,
        borderBottom: theme.table.borderBottom
    }
});