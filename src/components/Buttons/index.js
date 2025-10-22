import React from 'react';
import './button.css';

// Componente base para botão padrão
export const Button = ({ children, className = '', onClick, ...props }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            {...props}
        >
            <span>{children}</span>
        </button>
    );
};

// Botão Esquerda (com glow hover)
export const ButtonEsquerda = ({ children, onClick, ...props }) => {
    return (
        <button
            className="button button-esquerda"
            onClick={onClick}
            {...props}
        >
            <span>{children}</span>
        </button>
    );
};

// Botão Direita (outline)
export const ButtonDireita = ({ children, onClick, ...props }) => {
    return (
        <button
            className="button button-direita"
            onClick={onClick}
            {...props}
        >
            <span>{children}</span>
        </button>
    );
};

// Botão Saber Mais (com ícone opcional)
export const ButtonSaberMais = ({ children, icon, onClick, ...props }) => {
    return (
        <button
            className="saber-mais"
            onClick={onClick}
            {...props}
        >
            {children}
            {icon && <span className="icon">{icon}</span>}
        </button>
    );
};

// Botão Conversar
export const ButtonConversar = ({ children, onClick, ...props }) => {
    return (
        <button
            className="button-conversar"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão CTA (Quem Somos)
export const ButtonCTA = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão Primary Portfolio
export const ButtonPrimaryPortfolio = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn-primary"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn-primary"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão Secondary Portfolio
export const ButtonSecondaryPortfolio = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn-secondary"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn-secondary"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão Primário CTA
export const ButtonPrimarioCTA = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn-primario"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn-primario"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão Secundário CTA
export const ButtonSecundarioCTA = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn-secundario"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn-secundario"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Botão CTA Contato
export const ButtonCTAContato = ({ children, href, onClick, ...props }) => {
    if (href) {
        return (
            <a
                href={href}
                className="btn-cta"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className="btn-cta"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Componente de grupo de botões (para layout)
export const ButtonGroup = ({ children, className = '' }) => {
    return (
        <div className={`button-group ${className}`}>
            {children}
        </div>
    );
};

// Componente de botões CTA (para seção de projetos)
export const CTAButtons = ({ children, className = '' }) => {
    return (
        <div className={`cta-buttons ${className}`}>
            {children}
        </div>
    );
};

// Hook personalizado para gerenciar estados dos botões
export const useButtonState = (initialState = false) => {
    const [isLoading, setIsLoading] = React.useState(initialState);
    const [isDisabled, setIsDisabled] = React.useState(false);

    const handleClick = async (callback) => {
        if (isDisabled || isLoading) return;

        setIsLoading(true);
        try {
            await callback();
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        isDisabled,
        setIsDisabled,
        handleClick
    };
};

export default {
    Button,
    ButtonEsquerda,
    ButtonDireita,
    ButtonSaberMais,
    ButtonConversar,
    ButtonCTA,
    ButtonPrimaryPortfolio,
    ButtonSecondaryPortfolio,
    ButtonPrimarioCTA,
    ButtonSecundarioCTA,
    ButtonCTAContato,
    ButtonGroup,
    CTAButtons,
    useButtonState
};