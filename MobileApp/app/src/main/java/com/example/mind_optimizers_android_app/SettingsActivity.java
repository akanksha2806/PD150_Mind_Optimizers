package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.util.Locale;

public class SettingsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);
        loadLocale();
        Button ChangeLangu = findViewById(R.id.changeLang);
        ChangeLangu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showChangeLanguageDialog();
            }


        });
    }

    public void Theme1(View view)
    {

        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
        startActivity(new Intent(getApplicationContext(), HomeActivity.class));
        finish();

    }
    public void Theme2(View view)
    {
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
        startActivity(new Intent(getApplicationContext(), HomeActivity.class));
        finish();
    }
    private void showChangeLanguageDialog() {
        final String[] listItems={"Ënglish", "हिंदी", "मराठी","ગુજરાતી","اردو","ਪੰਜਾਬੀ"};
        AlertDialog.Builder mBuilder= new AlertDialog.Builder(SettingsActivity.this);
        mBuilder.setTitle("Choose Language.......");
        mBuilder.setSingleChoiceItems(listItems, -1, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int i) {
                if(i==0){
                    // English
                    setLocale("en");
                    recreate();
                }
                else if(i==1){
                    //Hindi
                    setLocale("hi");
                    recreate();
                }
                else if(i==2){
                    // Marathi
                    setLocale("mr-rIN");
                    recreate();
                }

                else if(i==3){
                    setLocale("gu");
                    recreate();
                }

                else if(i==4){
                    setLocale("ur");
                    recreate();
                }
                else if(i==5){
                    setLocale("pa-rIN");
                    recreate();
                }
                dialog.dismiss();
            }
        });

        AlertDialog mDialog = mBuilder.create();
        mDialog.show();
    }

    private void setLocale(String lang) {
        Locale locale = new Locale(lang);
        Locale.setDefault(locale);
        Configuration config = new Configuration();
        config.locale = locale;
        getBaseContext().getResources().updateConfiguration(config,getBaseContext().getResources().getDisplayMetrics());
        SharedPreferences.Editor editor = getSharedPreferences("Settings", MODE_PRIVATE).edit();
        editor.putString("My_Lang",lang);
        editor.apply();
    }

    public void loadLocale(){
        SharedPreferences prefs = getSharedPreferences("Settings", Activity.MODE_PRIVATE);
        String language = prefs.getString("My_Lang","");
        setLocale(language);
    }
}

