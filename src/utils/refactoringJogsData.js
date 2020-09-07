const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}

const rounded = number => {
    return +number.toFixed(2);
}

export const refactoringDate = date => {
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
}

export const calculateSpeed = (distance, time) => {
    return rounded((distance / 100) / time);
}

export const refactoringDistance = distance => {
    return (distance / 100);
}