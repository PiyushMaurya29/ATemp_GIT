import java.util.Scanner;

enum PieceType {
    X,
    O,
    EMPTY
}

class Player {
    private String name;
    private PieceType piece;

    public Player(String name, PieceType piece) {
        this.name = name;
        this.piece = piece;
    }

    public String getName() {
        return name;
    }

    public PieceType getPiece() {
        return piece;
    }
}

class Board {
    private PieceType[][] board;

    public Board(int size) {
        this.size = size;
        board = new PieceType[size][size];

    }

    private void initializeBoard() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                board[i][j] = PieceType.EMPTY;
            }
        }
    }

    public boolean placePiece(int row, int col, PieceType piece) {

        if (row < 0 || col < 0 || row >= size || col >= size) {
            return false;
        }

        if (board[row][col] != PieceType.EMPTY) {
            return false;
        }

        board[row][col] = piece;
        return true;
    }

    public boolean isWinner(int row, int col, PieceType piece) {

        boolean rowMatch = true;
        boolean colMatch = true;
        boolean diagonalMatch = true;
        boolean antiDiagonalMatch = true;

        // row check
        for (int j = 0; j < size; j++) {
            if (board[row][j] != piece) {
                rowMatch = false;
                break;
            }
        }

        // column check
        for (int i = 0; i < size; i++) {
            if (board[i][col] != piece) {
                colMatch = false;
                break;
            }
        }

        // diagonal check
        for (int i = 0; i < size; i++) {
            if (board[i][i] != piece) {
                diagonalMatch = false;
                break;
            }
        }

        // anti-diagonal check
        for (int i = 0; i < size; i++) {
            if (board[i][size - i - 1] != piece) {
                antiDiagonalMatch = false;
                break;
            }
        }

        return rowMatch || colMatch || diagonalMatch || antiDiagonalMatch;
    }

    public boolean isBoardFull() {

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (board[i][j] == PieceType.EMPTY) {
                    return false;
                }
            }
        }

        return true;
    }

    public void printBoard() {

        for (int i = 0; i < size; i++) {

            for (int j = 0; j < size; j++) {

                if (board[i][j] == PieceType.EMPTY) {
                    System.out.print("- ");
                } else {
                    System.out.print(board[i][j] + " ");
                }
            }

            System.out.println();
        }
    }
}

class Game {
    private Board board;
    private Player[] players;
    private int currentPlayerIndex;

    public Game() {
        initializeGame();
    }

    private void initializeGame() {

        board = new Board(3);

        players = new Player[2];

        players[0] = new Player("Piyush", PieceType.X);
        players[1] = new Player("Rahul", PieceType.O);

        currentPlayerIndex = 0;
    }

    public void startGame() {

        Scanner sc = new Scanner(System.in);

        while (true) {

            Player currentPlayer = players[currentPlayerIndex];

            board.printBoard();

            System.out.println(currentPlayer.getName() + "'s turn");
            System.out.println("Enter row and column:");

            int row = sc.nextInt();
            int col = sc.nextInt();

            boolean isPlaced =
                    board.placePiece(row, col, currentPlayer.getPiece());

            if (!isPlaced) {
                System.out.println("Invalid move. Try again.");
                continue;
            }

            boolean isWinner =
                    board.isWinner(row, col, currentPlayer.getPiece());

            if (isWinner) {
                board.printBoard();
                System.out.println(currentPlayer.getName() + " wins!");
                break;
            }

            if (board.isBoardFull()) {
                board.printBoard();
                System.out.println("Game Draw!");
                break;
            }

            currentPlayerIndex =
                    (currentPlayerIndex + 1) % players.length;
        }

        sc.close();
    }
}

public class TicTacToe {
    public static void main(String[] args) {

        Game game = new Game();

        game.startGame();
    }
}