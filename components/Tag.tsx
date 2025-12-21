interface Props {
    label?: string;
    children: string;
}

const Tag = ({label, children}: Props) => (
    <span className="tag">
        {label && <span className="label">{label}: </span>}
        <span className="value">{children}</span>

        <style jsx>{`
            .tag {
                display: block;
            }
            
            .label {
                font-weight: 300;
            }
            
            .value {
                font-weight: 600;
            }
        `}</style>
    </span>
)

export default Tag