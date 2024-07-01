module com.example.finddigitalrootofanumber {
    requires javafx.controls;
    requires javafx.fxml;
    requires kotlin.stdlib;


    opens com.example.finddigitalrootofanumber to javafx.fxml;
    exports com.example.finddigitalrootofanumber;
}